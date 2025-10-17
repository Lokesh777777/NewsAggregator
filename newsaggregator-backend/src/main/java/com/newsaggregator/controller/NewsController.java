package com.newsaggregator.controller;

import com.newsaggregator.dto.Article;
import com.newsaggregator.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/headlines")
    public ResponseEntity<List<Article>> getTopHeadlines(
            @RequestParam(defaultValue = "us") String country,
            @RequestParam(defaultValue = "general") String category) {
        return ResponseEntity.ok(newsService.getTopHeadlines(country, category));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Article>> searchNews(
            @RequestParam String query,
            @RequestParam(defaultValue = "publishedAt") String sortBy,
            @RequestParam(defaultValue = "20") int pageSize) {
        return ResponseEntity.ok(newsService.searchNews(query, sortBy, pageSize));
    }
}